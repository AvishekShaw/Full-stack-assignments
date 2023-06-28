/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)
  */
function display_clock(){
  console.clear();
  const now = new Date;
  const hours = now.getHours().toString().padStart(2,"0");
  const minutes = now.getMinutes().toString().padStart(2,"0");
  const seconds = now.getSeconds().toString().padStart(2,"0");

  console.log(`${hours}:${minutes}:${seconds}`)

  const time = now.toLocaleString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: true });
  console.log(`${time}`)
}
setInterval(display_clock,1000)