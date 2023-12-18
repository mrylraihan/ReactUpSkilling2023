export default async function handler(req, res) {
    try {
        // Fetch data from an external API
        // Return the fetched data as the response
        res.status(200).json({message:"Test Data"});
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}