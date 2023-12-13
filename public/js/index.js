$("#registration").on("submit", async function (event) {
  event.preventDefault();
  // const body = {
  //   email: $("#email").val(),
  //   firstName: $("#firstName").val(),
  //   lastName: $("#lastName").val(),
  // };
  // console.log(body);
  if (
    $("#email").val() === "" ||
    $("#firstName").val() === "" ||
    $("#lastName").val() === ""
  ) {
    $("#info-box").html(
      `
      <p>please fill form</p>
      `
    );
    return;
  }

  const res = await axios.post("http://localhost:3000/users", {
    email: $("#email").val(),
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
  });
  console.log(res);
  if (res.status === 200)
    $("#info-box").html(
      `<h1>Successfully registered ${$("#firstName").val()} </h1>
      <p>register new user</p>
      `
    );
  $("#firstName").val("");
  $("#lastName").val("");
  $("#email").val("");
});
