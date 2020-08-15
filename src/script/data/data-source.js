function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchMeal = function (keyword) {
    const filteredMeals = meals.filter(function (meal) {
        return meal.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredMeals.length) {
        this.onSuccess(filteredMeals);
    } else {
        this.onFailed(`${keyword} is not found`);
    }
};