// api.js

// API Configuration
const API_CONFIG = {
    JSONPLACEHOLDER_URL: 'https://jsonplaceholder.typicode.com',
    RANDOM_USER_URL: 'https://randomuser.me/api',
    PLACEHOLDER_IMAGE_URL: 'https://picsum.photos'
};

// Mock API Service
class APIService {
    // Get course details
    static async getCourseDetails(courseId) {
        try {
            const response = await fetch(`${API_CONFIG.JSONPLACEHOLDER_URL}/posts/${courseId}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching course details:', error);
            return null;
        }
    }

    // Get user profile image
    static async getRandomProfileImage() {
        try {
            const response = await fetch(API_CONFIG.RANDOM_USER_URL);
            const data = await response.json();
            return data.results[0].picture.large;
        } catch (error) {
            console.error('Error fetching profile image:', error);
            return 'https://cdn-icons-png.freepik.com/512/4226/4226726.png';
        }
    }

    // Get course comments
    static async getCourseComments(courseId) {
        try {
            const response = await fetch(`${API_CONFIG.JSONPLACEHOLDER_URL}/posts/${courseId}/comments`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching course comments:', error);
            return [];
        }
    }

    // Submit course review
    static async submitCourseReview(courseId, review) {
        try {
            const response = await fetch(`${API_CONFIG.JSONPLACEHOLDER_URL}/comments`, {
                method: 'POST',
                body: JSON.stringify({
                    postId: courseId,
                    ...review
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Error submitting review:', error);
            return null;
        }
    }

    // Get course progress
    static async getCourseProgress(userId, courseId) {
        try {
            const response = await fetch(`${API_CONFIG.JSONPLACEHOLDER_URL}/todos/${courseId}`);
            const data = await response.json();
            return {
                completed: data.completed,
                progress: Math.floor(Math.random() * 100)
            };
        } catch (error) {
            console.error('Error fetching progress:', error);
            return { completed: false, progress: 0 };
        }
    }
}