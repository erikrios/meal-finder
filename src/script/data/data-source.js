function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchMeal = keyword => {
    const filteredMeals = meals.filter(meal =>
        meal.name.toUpperCase().includes(keyword.toUpperCase()));

    if (filteredMeals.length) {
        this.onSuccess(filteredMeals);
    } else {
        this.onFailed(`${keyword} is not found`);
    }
};