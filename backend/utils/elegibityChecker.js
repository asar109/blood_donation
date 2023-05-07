const elegiblityChacker  = (lastDonation) => {
    const today = new Date();
    const lastDonationDate = new Date(lastDonation);
    const timeDiff = today.getTime() - lastDonationDate.getTime();
    const diffDays = timeDiff / (1000 * 3600 * 24);
    
    const eligibility = diffDays > 90 ? true : false; // 90 days is equivalent to 3 months
    return eligibility;
}

module.exports = elegiblityChacker;