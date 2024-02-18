import Mentor from "../model/mentor.model";

export const sortMentorsLTH = async(req, res) => {
    try {
        // Fetch mentors from the database
        const mentors = await Mentor.find().exec();
    
        // Sort mentors by fee in descending order (high to low)
        mentors.sort((a, b) => b.fee - a.fee);
    
        // Return the sorted list of mentors
        return mentors;
      } catch (error) {
        // Handle error
        console.error('Error fetching mentors:', error);
        throw error; // Re-throw the error for the caller to handle
      }
}