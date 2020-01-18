function groupAdultsByAgeRange(adults) {
  // console.log("Adults:", adults); //geeft array met 2 objecten
  // if (adults.length === 0) {
  //   return {};
  // }

  const adultsAge18OrHigher = adults.reduce(function(totalAge, adult) {
    if (adult.age >= 18) {
      return totalAge;
    }
    return adultsAge18OrHigher;
  }, {});

  // const adultsAge18OrHigher = adults.filter(function(adult) {
  //   // console.log(adult.age); geeft 10 & 17
  //   return adult.age >= 18;
  // });
  // console.log(adultsAge18OrHigher);
  // return adultsAge18OrHigher;
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
