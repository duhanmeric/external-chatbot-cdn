import { htmlFactory } from "../helpers/index.js";

class Chatbot {
  constructor() {
    this.ioFloatingContainer = null; // io-floating-container
    this.ioFloatingBtn = null; // io-floating-btn
    this.ioChatContainer = null; // io-chat-screen
    this.isLoaded = false;

    this.init();
  }

  init = () => {
    this.getCss();
    this.getFloatingButton();
    this.onOpen();
  };

  getCss = () => {
    const styleSheet = htmlFactory("link", {
      rel: "stylesheet",
      href: "./css/style.css",
    });
    document.head.appendChild(styleSheet);
  };

  getFloatingButton = () => {
    const floatingBtn = htmlFactory("button", {
      classList: "io-floating-button",
      textContent: "Canlı Destek",
    });

    const chatScreenContainer = htmlFactory("div", {
      classList: "io-chatscreen",
      hidden: true,
    });

    const floatingContainer = htmlFactory("div", {
      classList: "io-floating-container",
      children: [floatingBtn, chatScreenContainer],
    });

    this.ioFloatingContainer = floatingContainer;
    this.ioFloatingBtn = floatingBtn;
    this.ioChatContainer = chatScreenContainer;

    this.renderRoot(floatingContainer);
  };

  onOpen = () => {
    this.ioFloatingBtn.addEventListener("click", () => {
      this.ioFloatingBtn.setAttribute("hidden", true);
      this.ioChatContainer.removeAttribute("hidden");
      this.ioFloatingContainer.classList.add("active");
      this.loadChatSystem();
    });
  };

  onClose = () => {
    console.log("closed");
    this.ioChatContainer.setAttribute("hidden", true);
    this.ioFloatingContainer.classList.remove("active");
    this.ioFloatingBtn.removeAttribute("hidden");
  };

  loadChatSystem = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("animasyon bitti");
      }, 500);
    });

    if (!this.isLoaded) {
      const loadingScreen = htmlFactory("span", {
        classList: "io-chat-loading",
      });

      this.ioChatContainer.appendChild(loadingScreen);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          console.log("app yüklendi");
          this.isLoaded = true;
          this.ioChatContainer.removeChild(loadingScreen);
          this.getInnerChatScreen();
        }, 1000);
      });
    }
  };

  getInnerChatScreen = () => {
    const chatTitle = htmlFactory("h6", {
      classList: "io-chat-title",
      textContent: "Canlı Destek",
    });

    const closeBtn = htmlFactory("button", {
      classList: "io-close-button",
      textContent: "X",
    });

    const chatScreenHeader = htmlFactory("div", {
      classList: "io-chat-header",
      children: [chatTitle, closeBtn],
    });

    closeBtn.addEventListener("click", this.onClose);

    // TODO yukarıdaki gibi yap
    const chatBottomContainer = htmlFactory("div", {
      classList: "io-chat-bottom-container",
      children: [
        htmlFactory("input", {
          classList: "io-chat-input",
          placeholder: "Hello world!",
        }),
        htmlFactory("button", {
          classList: "io-chat-send",
          textContent: "send",
        }),
      ],
    });

    this.ioChatContainer.appendChild(chatScreenHeader);
    this.ioChatContainer.appendChild(chatBottomContainer);
  };

  renderRoot = (root) => {
    document.body.appendChild(root);
  };
}

export default Chatbot;
