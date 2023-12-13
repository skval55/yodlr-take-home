$(document).ready(async function () {
  const res = await axios.get("http://localhost:3000/users");
  console.log(res.data);

  for (let person of res.data) {
    $("#collapse-list").append(`
    <div class="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" checked="checked" />
    <div class="collapse-title text-xl font-medium">
      ${person.firstName} ${person.lastName}
    </div>
    <div class="collapse-content">
      <p>Email: ${person.email}</p>
      <p>status: ${person.state}</p>
    </div>
  </div>
    `);
  }
});
