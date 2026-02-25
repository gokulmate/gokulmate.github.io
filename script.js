// Form submit alert
document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
  const params = {
          from_name: document.getElementById("name").value,
          email_id: document.getElementById("email").value,
          message: document.getElementById("message").value,
          file_link: document.getElementById("file_link").value,
          phone: document.getElementById("phone").value,
          post: document.getElementById("designation").value,
          company: document.getElementById("compName").value,
          prevComps: document.getElementById("prevComp").value,
          yoe: document.getElementById("expYears").value,
          expertise: document.getElementById("domains").value,
          certifications: document.getElementById("recognitions").value,
          photo: document.getElementById("photoLink").value,
          speakerIntro: document.getElementById("shortIntro").value,

        };


        //Change the service and template id below //
        emailjs.send("service_deh1g58", "template_9e7w9ow", params).then(
          function (response) {
            alert("✅ Message sent with file link!");
            document.getElementById("contact-form").reset();
          },
          function (error) {
            alert("❌ Failed to send. Error: " + JSON.stringify(error));
          }
        );
      });
