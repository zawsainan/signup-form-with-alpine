document.addEventListener("alpine:init", () => {
  Alpine.data("myForm", () => ({
    username: "",
    password: "",
    passwordConfirm: "",
    belt: "",
    bio: "",
    close() {
      this.showModal = false;
      this.username = "";
      this.password = "";
      this.passwordConfirm = "";
      this.belt = "";
      this.bio = "";
    },
    showPassword: false,
    showModal: false,
    errors: {},
    beltColors: [
      "White",
      "Yellow",
      "Orange",
      "Green",
      "Blue",
      "Purple",
      "Brown",
      "Red",
      "Black",
    ],
    submit() {
      this.validate();
      if (Object.keys(this.errors).length == 0) {
        this.showModal = true;
      }
    },
    validate() {
      this.errors = {};
      if (this.username.length < 3) {
        this.errors.username = "Username must be at least 3 characters long.";
      }
      if (this.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters long.";
      }
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = "Passwords do not match.";
      }
      if (this.belt == "") {
        this.errors.belt = "Please select a belt.";
      }
      if (this.bio == "") {
        this.errors.bio = "Bio must not be empty.";
      }
    },
  }));
});
