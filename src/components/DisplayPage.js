import React from "react";
import "./displayPage.css";

const DisplayPage = () => {
  return (
    <div className="introduction-container">
      <div className="content">
        <h1>Welcome to AI GPT-Clone!</h1>
        <div className="text-container">
          <div style={{ display: "flex" }}>
            <div className="feature-image-container">
              <img
                src="https://play-lh.googleusercontent.com/tG4RPtsIJ1xCiz5fX0-oLkQpm7Ks-HIAsVAtsM9H0JZZ56jLPZmXRUd5TCz5USdh82QO"
                alt="Chat Bot"
                className="feature-image"
              />
            </div>
            <p>
              AI GPT-Clone is an advanced and intelligent chatbot powered by
              cutting-edge artificial intelligence. Our goal is to provide you
              with an interactive and seamless conversational experience.
              Whether you need assistance, seek information, or simply want to
              have a friendly chat, AI GPT is here to help.
            </p>
          </div>
          <p>
            Our chatbot leverages the power of OpenAI's GPT-3.5 language model,
            which enables it to understand and respond to a wide array of inputs
            naturally. You can converse with AI GPT just like you would with a
            real human, making the experience more engaging and productive.
          </p>
          <p>
            Whether you are a developer, student, or a curious user, AI GPT
            offers an array of functionalities that suit your needs. Its
            versatility allows it to be integrated into various applications,
            such as customer support services, language translation, content
            generation, and much more.
          </p>
          <div className="features-container">
            <h2>Features</h2>
            <div className="feature">
              <div className="feature-description">
                <h3>Chat Bot</h3>
                <p>
                  Our Chat Bot is powered by advanced artificial intelligence
                  and is designed to have natural and interactive conversations
                  with users. It can answer questions, provide suggestions, and
                  assist with various tasks. The Chat Bot leverages the GPT-3.5
                  language model to ensure accurate and contextually relevant
                  responses.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-description">
                <h3>Summary Generation</h3>
                <p>
                  Our Summary Generation feature allows users to input lengthy
                  texts or articles and obtain concise and coherent summaries.
                  Powered by advanced natural language processing techniques,
                  this functionality condenses large bodies of text into key
                  points, making it ideal for information retrieval and content
                  summarization tasks.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-description">
                <h3>Paragraph Generation</h3>
                <p>
                  With our Paragraph Generation feature, users can input
                  specific prompts or questions, and the AI model will generate
                  informative and contextually accurate paragraphs. Whether it's
                  for creative writing, educational content, or filling in
                  information gaps, this functionality offers a convenient way
                  to generate well-structured paragraphs on demand.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-description">
                <h3>Image from Prompt Generation</h3>
                <p>
                  Our Image from Prompt Generation feature is a cutting-edge
                  capability that allows users to provide textual prompts, and
                  the AI model will generate relevant images based on those
                  prompts. It's a unique and creative way to visualize ideas,
                  concepts, and scenarios, opening up endless possibilities for
                  artistic and practical applications.
                </p>
              </div>
            </div>
          </div>
          <p>Summary:</p>
          <p>
            With AI GPT, we aim to bridge the gap between humans and machines,
            delivering a natural and intuitive chatbot experience. Our
            commitment to innovation and continuous improvement ensures that AI
            GPT remains at the forefront of conversational AI technology. As we
            grow, we look forward to exploring new possibilities and expanding
            the capabilities of AI GPT to benefit a wide range of industries and
            users worldwide.
          </p>
          {/* <div className="author-section">
            <div className="author-image-container">
              <img
                src="https://i.ibb.co/hD9ngP4/Sudharshan-K.jpg"
                alt="Author"
                className="author-image"
              />
            </div>
            <div className="author-details">
              <h3>About the Author</h3>
              <p>
                Hi, I'm Sudharshan, Software engineer, I'm passionate about
                leveraging cutting-edge technology to build innovative
                solutions. I'm excited to share AI GPT with the world. My vision
                is to make AI more accessible and user-friendly, and AI GPT is a
                step towards realizing that goal.
              </p>
              <p>Happy chatting!</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
