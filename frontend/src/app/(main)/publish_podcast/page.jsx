import React from 'react'

const PodcastPublishingPage = () => {
  return (

    
    <>
    <div>
        <h1>Publish Your Podcast</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Podcast Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Podcast Description:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="episodeTitle">Episode Title:</label>
            <input
              type="text"
              id="episodeTitle"
              name="episodeTitle"
              value={episodeTitle}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="episodeDescription">Episode Description:</label>
            <textarea
              id="episodeDescription"
              name="episodeDescription"
              value={episodeDescription}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="episodeFile">Upload Episode File:</label>
            <input
              type="file"
              id="episodeFile"
              name="episodeFile"
              onChange={this.handleFileChange}
              required
            />
          </div>
          <button type="submit">Publish Podcast</button>
        </form>
      </div>
    </>
  )
}

export default PodcastPublishingPage;