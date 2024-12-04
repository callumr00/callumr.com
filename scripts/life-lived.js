document.addEventListener('DOMContentLoaded', function() {
	birthDate = new Date('2000-01-31');
	currentDate = Date.now();

	ageInMilliseconds = currentDate - birthDate;
	ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);

	lifeExpectancyInYears = 80;
	percentLifeLived = (ageInYears / lifeExpectancyInYears) * 100;
	percentLifeLived = percentLifeLived.toFixed(2);

	document.getElementById('life-lived').innerHTML = percentLifeLived;
});
