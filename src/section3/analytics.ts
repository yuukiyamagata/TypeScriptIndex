let logged;

const sendAnalytics = (data: string) => {
  console.log(data);
  logged = true;
  logged = "Max";
  console.log(logged);
}

sendAnalytics("the data");