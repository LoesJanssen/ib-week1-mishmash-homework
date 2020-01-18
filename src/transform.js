function groupAdultsByAgeRange(adults) {
  const adultsByRange = adults.reduce(function(result, adult) {
    if (adult.age >= 18) {
      return result.push(adult);
    }
    return result;
  }, {});
  return adultsByRange;
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
