document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("input");
  const outputElement = document.getElementById("output");
  const terminalBodyElement = document.getElementById("terminal-body");

  // Command history
  let commandHistory = [];
  let historyIndex = -1;

  // Execute command
  function executeCommand() {
    const command = inputElement.value.trim();

    // Clear input
    inputElement.value = "";

    // Output command
    const commandOutput = document.createElement("div");
    commandOutput.textContent = "$ " + command;
    commandOutput.classList.add("command");
    outputElement.appendChild(commandOutput);

    // Handle commands
    if (command === "clear") {
      outputElement.textContent = "";
      return;
    }

    if (command === "history") {
      const commandHistoryOutput = document.createElement("div");
      commandHistoryOutput.classList.add("command-output");
      commandHistoryOutput.textContent = commandHistory.join("\n");
      outputElement.appendChild(commandHistoryOutput);
      return;
    }

    if (command === "portfolio") {
      // Redirect to another page
      window.location.href = "portfolio.html";
      return;
    }else if (command === "open portfolio") {
      // Redirect to another page
      window.location.href = "portfolio.html";
      return;
    }
    else if (command === "portfolio skill") {
      // Redirect to another page
      window.location.href = "skills.html";
      return;
    }
    else if (command === "portfolio about") {
      // Redirect to another page
      window.location.href = "skills.html";
      return;
    }
    else if (command === "portfolio blog") {
      // Redirect to another page
      window.location.href = "blogs.html";
      return;
    }else if (command === "portfolio resume") {
      // Redirect to another page
      window.location.href = "./adrianalvird/resume/Resume.pdf";
      return;
    }else if (command === "portfolio achievement") {
      // Redirect to another page
      window.location.href = "achievements.html";
      return;
    }else if (command === "portfolio profile") {
      // Redirect to another page
      window.location.href = "profile.html";
      return;
    }else if (command === "logs") {
      // Redirect to another page
      window.location.href = "./logs/index.html";
      return;
    }else if (command === "log") {
      // Redirect to another page
      window.location.href = "./logs/index.html";
      return;
    }
    
    
    
    
    if (command === "id") {
      const idOutput = document.createElement("div");
      idOutput.classList.add("command-output");
      idOutput.textContent = "this id command will help you to see my ids of different social platforms , you can type id <social_name> e.g; id facebook";
      outputElement.appendChild(idOutput);
      return;
    }else if (command === "id facebook") {
      const fbidOutput = document.createElement("div");
      fbidOutput.classList.add("command-output");
      fbidOutput.textContent = "Facebook: https://www.facebook.com/theadrianalvird";
      outputElement.appendChild(fbidOutput);
      return;
    }else if (command === "id instagram") {
      const igidOutput = document.createElement("div");
      igidOutput.classList.add("command-output");
      igidOutput.textContent = "Instagram: https://www.instagram.com/adrian.alvird/";
      outputElement.appendChild(igidOutput);
      return;
    }else if (command === "id twitter") {
      const twidOutput = document.createElement("div");
      twidOutput.classList.add("command-output");
      twidOutput.textContent = "Twitter: https://twitter.com/adrianalvird";
      outputElement.appendChild(twidOutput);
      return;
    }else if (command === "id tryhackme") {
      const thmidOutput = document.createElement("div");
      thmidOutput.classList.add("command-output");
      thmidOutput.textContent = "TryHackMe: https://www.tryhackme.com/p/adrianalvird";
      outputElement.appendChild(thmidOutput);
      return;
    }else if (command === "id buymeacoffee") {
      const bmcidOutput = document.createElement("div");
      bmcidOutput.classList.add("command-output");
      bmcidOutput.textContent = "BuyMeACoffee: https://www.buymeacoffee.com/adrianalvird";
      outputElement.appendChild(bmcidOutput);
      return;
    }else if (command === "id linkedin") {
      const igidOutput = document.createElement("div");
      linkidOutput.classList.add("command-output");
      linkidOutput.textContent = "Linkedin: https://www.linkedin.com/in/adrianalvird/";
      outputElement.appendChild(linkidOutput);
      return;
    }else if (command === "id credly") {
      const credidOutput = document.createElement("div");
      credidOutput.classList.add("command-output");
      credidOutput.textContent = "Instagram: https://www.credly.com/users/subhadeep-pramanik/badges";
      outputElement.appendChild(credidOutput);
      return;
    }else if (command === "id reddit") {
      const reidOutput = document.createElement("div");
      reidOutput.classList.add("command-output");
      reidOutput.textContent = "Reddit: https://www.reddit.com/user/adrianalvird";
      outputElement.appendChild(reidOutput);
      return;
    }else if (command === "id email") {
      const mailidOutput = document.createElement("div");
      mailidOutput.classList.add("command-output");
      mailidOutput.textContent = "ProtonMail: adrianalvird@protonmail.com | Gmail: theadrianalvird@gmail.com | YahooMail: adrianalvird@yahoo.com";
      outputElement.appendChild(mailidOutput);
      return;
    }else if (command === "id github") {
      const gitidOutput = document.createElement("div");
      gitidOutput.classList.add("command-output");
      gitidOutput.textContent = "GitHub: https://github.com/adrianalvird";
      outputElement.appendChild(gitidOutput);
      return;
    }else if (command === "id discord") {
      const disidOutput = document.createElement("div");
      disidOutput.classList.add("command-output");
      disidOutput.textContent = "Discord: https://discord.gg/mD5aWsGQ";
      outputElement.appendChild(disidOutput);
      return;
    }
    
    if (command === "pwd") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = "/";
      outputElement.appendChild(whoamiOutput);
      return;
    }  
    if (command === "hobby") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = "Wanna protect you and others Organizations from Cyber Attacks ";
      outputElement.appendChild(whoamiOutput);
      return;
    }else if (command === "skills") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = "I Know Django & Flask Frameworks , also TCP/IP, Windows/Linux, CyberSecurity Fundamentals,Risk Assessment and Management, Security tools,  Social Engineering , Encryption and Cryptography, Incident Response, Ethical Hacking and Penetration Testing .";
      outputElement.appendChild(whoamiOutput);
      return;
    }else if (command === "language") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = " Bengali(Native) , English(Moderate), Hindi(Moderate) .";
      outputElement.appendChild(whoamiOutput);
      return;
    }else if (command === "education") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = "I Graduated from Memari College under University of Burdwan on B.Sc Computer Science Hons  on 2021..  ";
      outputElement.appendChild(whoamiOutput);
      return;
    } else if (command === "objective") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = "To kick-start my career in cybersecurity as a fresher, seeking an entry-level position that allows me to apply my knowledge and passion for cybersecurity. I am eager to learn and contribute to the organization's security efforts by leveraging my foundational understanding of cybersecurity principles, networking, and system administration. I aim to gain practical experience, develop my skills further, and contribute to creating a secure environment for the organization's digital assets.";
      outputElement.appendChild(whoamiOutput);
      return;
    }else if (command === "tools") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = "As a Bug Hunter I use many tools in Daily Basis and every day I explore many tools, there are some tools I Like Burp Suite , Nmap , Nessus , Wireshark , Metasploit , Maltego , BeeF , OpenVAS, Crunch , JohnTheRipper , Medusa , Masscan , Amass, Nikto , NetCat, Splunk, QRader , Snort , also familiarize many github based tools . ";
      outputElement.appendChild(whoamiOutput);
      return;
    }else if (command === "certificate") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = "Practical Ethical Hacking - The Complete Course - TCM Security |  NDG Linux Essentials - CISCO | Advent of Cyber 2021 - TryHackMe | Cybersecurity Essentials - CISCO  |NSE -1 - Fortinet  and much more i don't even specified";
      outputElement.appendChild(whoamiOutput);
      return;
    }  
     

    if (command === "whoami") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = "adrianalvird";
      outputElement.appendChild(whoamiOutput);
      return;
    }
    if (command === "help") {
      const helpOutput = document.createElement("div");
      helpOutput.classList.add("command-output");
      helpOutput.textContent = "Use 'command' to see available command ..Note that, this is not actual terminal.  but I tried to make exact like linux terminal , so you can use linux command here .. if you think since you've control this terminal you can do anything , don't waste your time here ... ";
      outputElement.appendChild(helpOutput);
      return;
    }
    if (command === "vulnerability") {
      const ageOutput = document.createElement("div");
      ageOutput.classList.add("command-output");
      ageOutput.textContent = "This Terminal made by Javascript , and there is a injection vulnerability as well , you can test you further ... but this will not give you control over the application .. ";
      outputElement.appendChild(ageOutput);
      return;
    }
    if (command === "man") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = "manual guide page , use command man <command>  to see the usage of this command";
      outputElement.appendChild(whoamiOutput);
      return;
    }else if (command === "man help") {
      const whoamiOutput = document.createElement("div");
      whoamiOutput.classList.add("command-output");
      whoamiOutput.textContent = "manual guide page for help page , ";
      outputElement.appendChild(whoamiOutput);
      return;
    }
    
    if (command === "age") {
      const ageOutput = document.createElement("div");
      ageOutput.classList.add("command-output");
      ageOutput.textContent = "hello I am subhadeep Pramanik, I currently 24 years , ";
      outputElement.appendChild(ageOutput);
      return;
    }
    if (command === "dateofbirth") {
      const dobOutput = document.createElement("div");
      dobOutput.classList.add("command-output");
      dobOutput.textContent = "My Date of Birth is 26 April , 1999 ";
      outputElement.appendChild(dobOutput);
      return;
    }else if (command === "dob") {
      const dobOutput = document.createElement("div");
      dobOutput.classList.add("command-output");
      dobOutput.textContent = "My Date of Birth is 26 April , 1999 ";
      outputElement.appendChild(dobOutput);
      return;
    }
           
    
    if (command === "command") {
      const commandOutput = document.createElement("div");
      commandOutput.classList.add("command-output");
      commandOutput.textContent = "portfolio, realname, whoami, man, id [social_name], clear, history,  ";
      outputElement.appendChild(commandOutput);
      return;
    }
    
    if (command === "ls") {
      const lsOutput = document.createElement("div");
      lsOutput.classList.add("command-output");
      lsOutput.textContent = "Desktop  Documents";
      outputElement.appendChild(lsOutput);
      return;
    }else if (command === "cd Desktop") {
      const cdOutput = document.createElement("div");
      cdOutput.classList.add("command-output");
      cdOutput.textContent = "--";
      outputElement.appendChild(cdOutput);
      return;
    }else if(command === "cd ..") {
      const cdOutput = document.createElement("div");
      cdOutput.classList.add("command-output");
      cdOutput.textContent = "Desktop Documents";
      outputElement.appendChild(cdOutput);
      return;
    }else if (command === "cd Documents") {
      const cdOutput = document.createElement("div");
      cdOutput.classList.add("command-output");
      cdOutput.textContent = "--";
      outputElement.appendChild(cdOutput);
      return;
    }
    if (command === "copyrights") {
      const realnameOutput = document.createElement("div");
      realnameOutput.classList.add("command-output");
      realnameOutput.textContent = "No one have permission to use change or modify this web application , this website is copyright reserved by AKA adrianalvird ";
      outputElement.appendChild(realnameOutput);
      return;
    }
    if (command === "realname") {
      const realnameOutput = document.createElement("div");
      realnameOutput.classList.add("command-output");
      realnameOutput.textContent = "Subhadeep Pramanik";
      outputElement.appendChild(realnameOutput);
      return;
    }
    if (command === "about") {
      const aboutOutput = document.createElement("div");
      aboutOutput.classList.add("command-output");
      aboutOutput.textContent = "Hello, My name is Subhadeep Pramanik, and I graduated under Memari College from University of Burdwan . I am a student ,  Django Developer , CyberSecurity Enthusiast and Bug Bounty Hunter . I love to find vulnerabilities on systems , I learned security testing from OSCP , AWAE, AWE, CTP, PEN-300, WiFu, eCPPTv2, eCPTX, eWPT,  SANS SEC201, SEC542, SEC552, SEC560, SEC573, SEC588, SEC642, SEC660, SEC760' and also from many resources . ";
      outputElement.appendChild(aboutOutput);
      return;
    }else if (command === "about me") {
      const aboutOutput = document.createElement("div");
      aboutOutput.classList.add("command-output");
      aboutOutput.textContent = "Hello, My name is Subhadeep Pramanik, and I graduated under Memari College from University of Burdwan . I am a student ,  Django Developer , CyberSecurity Enthusiast and Bug Bounty Hunter . I love to find vulnerabilities on systems , I learned security testing from OSCP , AWAE, AWE, CTP, PEN-300, WiFu, eCPPTv2, eCPTX, eWPT,  SANS SEC' 201, 542, 552, 560, 573, 588,642, 660, 760' and also from many resources . I completed more than 120+ labs including TryHackMe , HackTheBox , Offensive Security , Portswiggers , and I'm still on top of 1 Percent at Tryhackme , ";
      outputElement.appendChild(aboutOutput);
      return;
      }


    // Command not found
    const notFoundOutput = document.createElement("div");
    notFoundOutput.textContent = "Command not found: " + command;
    notFoundOutput.classList.add("command-output", "command-not-found");
    outputElement.appendChild(notFoundOutput);
  }

  // Handle input
  inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const command = inputElement.value.trim();

      if (command !== "") {
        // Add command to history
        commandHistory.push(command);
        historyIndex = -1;

        // Execute command
        executeCommand();
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      // Navigate command history (up)
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        inputElement.value = commandHistory[commandHistory.length - 1 - historyIndex];
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      // Navigate command history (down)
      if (historyIndex >= 0) {
        historyIndex--;
        if (historyIndex === -1) {
          inputElement.value = "";
        } else {
          inputElement.value = commandHistory[commandHistory.length - 1 - historyIndex];
        }
      }
    }
  });

  // Make terminal draggable
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let offsetX = 0;
  let offsetY = 0;

  function handleMouseDown(event) {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    offsetX = event.target.offsetLeft;
    offsetY = event.target.offsetTop;
  }

  function handleMouseMove(event) {
    if (!isDragging) return;

    const dx = event.clientX - startX;
    const dy = event.clientY - startY;

    const left = offsetX + dx;
    const top = offsetY + dy;

    terminalBodyElement.style.left = left + "px";
    terminalBodyElement.style.top = top + "px";
  }

  function handleMouseUp() {
    isDragging = false;
  }

  terminalBodyElement.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
});

document.addEventListener("DOMContentLoaded", function () {
  const popupElement = document.getElementById("popup");
  const popupMessageElement = document.getElementById("popup-message");
  const closePopupButton = document.getElementById("close-popup");

  // Display the pop-up
  function displayPopup() {
    popupElement.style.display = "block";
  }

  // Hide the pop-up
  function closePopup() {
    popupElement.style.display = "none";
  }

  // Event listener for closing the pop-up
  closePopupButton.addEventListener("click", closePopup);

  // Show the pop-up on page load
  displayPopup();
});

