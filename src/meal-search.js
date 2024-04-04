const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export async function searchForMeal(input) {
  return await sendTheMealDbRequest(input);
}

async function sendTheMealDbRequest(input) {
  try {
    const response = await fetch(`${URL}${input}`);
    if (!response.ok) {
      console.error("error");
    }

    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Error", error);
  }
}