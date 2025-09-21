import alert from "../alert.json";

export default class alert {
  init() {
    console.log("loading alert:", alert);
    this.renderAlert(alert);
  }

  renderAlert(alert) {
    const alertContainer = document.querySelector("#alert");
    if (!alertContainer) return;

    alertContainer.innerHTML = "";

    alert.forEach((alert) => {
      const p = document.createElement("p");
      p.textContent = alert.message;
      p.style.backgroundColor = alert.background || "darkblue";
      p.style.color = alert.color || "white";
      p.style.padding = "1rem";
      p.style.marginBottom = "0.5rem";
      p.style.borderRadius = "5px";
      p.style.fontWeight = "bold";

      alertContainer.appendChild(p);
    });
  }
}
