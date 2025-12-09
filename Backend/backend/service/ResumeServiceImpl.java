package com.resume.backend.service;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService {

    @Override
    public Map<String, Object> generateResumeResponse(String prompt) throws IOException {
        String apiKey = "AIzaSyBUjpCppFhToJWJ1jcZ4ZQ3F5CIiYaFa0Q"; // Replace with your Gemini API Key
        String endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;

        // ✅ 1. Prompt for Gemini (pure JSON only, no markdown or explanation)
        String fullPrompt = """
You are an AI resume assistant. Return ONLY a valid JSON object with NO explanation or markdown.

Your job is to extract structured resume information from the user input and format it into this JSON structure.Write a 2–3 line professional summary based on the input. Avoid paragraphs. Do not skip the summary field.

Output format:
{
  "personalInformation": {
    "fullName": "",
    "email": "",
    "phoneNumber": "",
    "location": "",
    "linkedin": "",
    "gitHub": "",
    "portfolio": ""
  },
  "summary": "",
  "skills": [
    { "title": "", "level": "" }
  ],
  "experience": [
    {
      "company": "",
      "jobTitle": "",
      "duration": "",
      "location": "",
      "responsibility": ""
    }
  ],
  "education": [
    {
      "degree": "",
      "university": "",
      "location": "",
      "graduationYear": ""
    }
  ],
  "certifications": [
    {
      "title": "",
      "issuingOrganization": "",
      "year": ""
    }
  ],
  "projects": [
    {
      "title": "",
      "description": "",
      "technologiesUsed": [],
      "githubLink": ""
    }
  ],
  "achievements": [
    {
      "title": "",
      "year": "",
      "extraInformation": ""
    }
  ],
  "languages": [
    { "name": "" }
  ],
  "interests": [
    { "name": "" }
  ]
}

Extract structured data from this user input and fill all fields:
""" + prompt;




        // ✅ 2. Create JSON request payload
        JSONArray parts = new JSONArray();
        JSONObject part = new JSONObject();
        part.put("text", fullPrompt);
        parts.put(part);

        JSONObject content = new JSONObject();
        content.put("parts", parts);

        JSONArray contents = new JSONArray();
        contents.put(content);

        JSONObject body = new JSONObject();
        body.put("contents", contents);

        // ✅ 3. Build request
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endpoint))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(body.toString()))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> response;

        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (InterruptedException e) {
            throw new IOException("Gemini API call interrupted", e);
        }

        String raw = response.body();
        System.out.println("🔍 Gemini API Raw Response: " + raw);

        // ✅ 4. Process response
        Map<String, Object> result = new HashMap<>();
        try {
            JSONObject jsonResponse = new JSONObject(raw);
            if (jsonResponse.has("candidates")) {
                String jsonText = jsonResponse
                        .getJSONArray("candidates")
                        .getJSONObject(0)
                        .getJSONObject("content")
                        .getJSONArray("parts")
                        .getJSONObject(0)
                        .getString("text");

                // ✅ 5. Clean markdown if present
                jsonText = jsonText.replaceAll("(?s)```json\\s*", "").replaceAll("(?s)```", "").trim();

                // ✅ 6. Parse safely
                if (jsonText.startsWith("{") && jsonText.endsWith("}")) {
                    JSONObject structuredJson = new JSONObject(jsonText);
                    result.put("data", structuredJson.toMap()); // Frontend-ready structure
                } else {
                    result.put("error", "❌ Gemini response is not valid JSON:\n" + jsonText);
                }
            } else {
                result.put("error", "❌ Gemini API did not return candidates");
            }
        } catch (Exception e) {
            result.put("error", "❌ Error parsing Gemini response: " + e.getMessage());
        }

        return result;
    }

}



