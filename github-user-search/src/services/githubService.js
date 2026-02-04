import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch a single GitHub user by username
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Advanced search for GitHub users
 * Supports username, location and minimum repositories
 */
export const searchUsersAdvanced = async (username, location, minRepos) => {
  try {
    let query = username || "";

    if (location) {
      query += `+location:${location}`; // location
    }

    if (minRepos) {
      query += `+repos:>${minRepos}`; // minRepos
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    return response.data.items;
  } catch (error) {
    throw error;
  }
};
