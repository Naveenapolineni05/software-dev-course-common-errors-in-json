/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  . Comma missing after checkInDate value
  . In the guests array, the name key for Alice Johnson is missing quotation marks
  . The age value for Bob Smith is set to undefined, which is not a valid JSON value
  . The email value for Bob Smith is missing .com at the end
  . In the amenities array, there is a trailing comma after "Parking"

  • Why is it a problem in JSON?
  . JSON requires commas to separate key-value pairs; missing commas lead to parsing errors
  . JSON keys must be strings enclosed in double quotes; missing quotes cause syntax errors
  . JSON does not support undefined as a value; it must be null or a valid data type
  . Email addresses must be valid strings
  . Trailing commas are not allowed in JSON arrays or objects; they cause parsing errors

  • What did you change to fix it?
  . Added a comma after the checkInDate value
  . Added quotation marks around the name key for Alice Johnson
  . Changed Bob Smith's age value from undefined to null
  . Corrected Bob Smith's email to include .com
  . Removed the trailing comma after "Parking" in the amenities array
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
     I used linter and manually reviewed to fix the issues.

2️⃣ How did you confirm that your corrected JSON file was valid?
      I used JSONLint to validate the corrected JSON file.

3️⃣ Which errors were the most difficult to spot? Why?
      The most difficult error to spot was the missing quotation marks around the name key for Alice Johnson because it was not immediately obvious without careful inspection.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
      Using linters can help catch these errors early. 
*/
