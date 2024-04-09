import React from 'react'

const publish_podcast = () => {
    // State variables to hold podcast information
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [episodeTitle, setEpisodeTitle] = useState('');
    const [episodeDescription, setEpisodeDescription] = useState('');
    const [episodeFile, setEpisodeFile] = useState(null);

    // Function to handle podcast submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submission logic here, e.g., send data to backend
        console.log('Podcast submitted:', {
            title,
            description,
            episodeTitle,
            episodeDescription,
            episodeFile,
        });
        // Reset form fields
        setTitle('');
        setDescription('');
        setEpisodeTitle('');
        setEpisodeDescription('');
        setEpisodeFile(null);
    };
    return (
        <>

            <div>
                <h1>Publish Your Podcast</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Podcast Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Podcast Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="episodeTitle">Episode Title:</label>
                        <input
                            type="text"
                            id="episodeTitle"
                            value={episodeTitle}
                            onChange={(e) => setEpisodeTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="episodeDescription">Episode Description:</label>
                        <textarea
                            id="episodeDescription"
                            value={episodeDescription}
                            onChange={(e) => setEpisodeDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="episodeFile">Upload Episode File:</label>
                        <input
                            type="file"
                            id="episodeFile"
                            onChange={(e) => setEpisodeFile(e.target.files[0])}
                            required
                        />
                    </div>
                    <button type="submit">Publish Podcast</button>
                </form>
            </div>


        </>
    )
}

export default publish_podcast;