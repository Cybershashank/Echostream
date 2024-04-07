import React from 'react'

const feedback = () => {



  return (
    <>

      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>feedback</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        *{\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n        \n        }\n        body{\n            font-family: 'Outfit';\n            background: linear-gradient(#ffdad5,#fff7f9);\n        }\n        .contact-container{\n            height: 100vh;\n            display: flex;\n            align-items: center;\n            justify-content: space-evenly;\n        }\n        .contact-left{\n            display: flex;\n            flex-direction: column;\n            align-items: start;\n            gap: 20px;\n        }\n        .contact-left-title h2{\n            font-weight: 600;\n            color: #a363aa;\n            font-size: 40px;\n            margin-bottom: 5px;\n        }\n        .contact-left-title hr{\n            border: none;\n            width: 120px;\n            height: 5px;\n            background-color: #a363aa;\n            border-radius: 10px;\n            margin-bottom: 20px;\n        }\n        .contact-inputs{\n            width: 400px;\n            height: 50px;\n            border: none;\n            outline: none;\n            padding-left: 25px;\n            font-weight: 500;\n            color: #666;\n            border-radius: 50px;\n        }\n        .contact-left textarea{\n            height: 140px;\n            padding-top: 15px;\n            border-radius: 20px;\n        }\n        .contact-inputs:focus{\n            border: 2px solid #ff994f;\n        }\n        .contact-inputs::placeholder{\n            color: #a9a9a9;\n        }\n        .contact-left button{\n            display: flex;\n            align-items: center;\n            padding: 15px 30px;\n            font-size: 16px;\n            color: #fff;\n            gap: 10px;\n            border: none;\n            border-radius: 50px;\n            background: linear-gradient(270deg,#ff994f,#fa6d86);\n            cursor: pointer;\n        }\n        .contact-left button img{\n            height: 15px;\n        }\n        .contact-right img{\n            width: 500px;\n        }\n        @media(max-width:800px) {\n            .contact-inputs{\n                width: 80vw;\n            }.contact-right{\n                display: none;\n            }\n        \n        }\n    "
          }}
        />
        <div className="contact-container">
          <form action="" className="contact-left">
            <div className="contact-left-title">
              <h2>Feedback</h2>
              <hr />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-inputs"
              required=""
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-inputs"
              required=""
            />
            <textarea
              name="message"
              placeholder="Your feedback"
              className="contact-inputs"
              required=""
              defaultValue={""}
            />
            <button type="submit">
              Submit <img src="assets/arrow_icon.png" alt="" />
            </button>
          </form>
          <div className="contact-right">
            <img src/>
          </div>
        </div>
      </>
    </>
  )
}

export default feedback;