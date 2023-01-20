export const displayTimeParsed = (startTime) => {
    const today = new Date().toLocaleString("en-US", {
        timeZone: "UTC",
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });
    const displayTime = new Date(startTime).toLocaleString("en-US", {
        timeZone: "UTC",
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
    });

    const activityDate = new Date(startTime).toLocaleString("en-US", {
        timeZone: "UTC",
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });

    const activityTime = new Date(startTime).toLocaleString("en-US", {
        timeZone: "UTC",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
    });

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const yesterdayParsed = yesterday.toLocaleString("en-US", {
        timeZone: "UTC",
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });

    return today === activityDate
        ? `Today at ${activityTime}`
        : yesterdayParsed === activityDate
        ? `Yesterday at ${activityTime}`
        : displayTime.split(",").join(" at ");
};

export const activitiesInLast30 = (activities) => {
    const today = new Date();

    const filteredActivities = activities.filter((activity) => {
        const startTime = new Date(activity.startTime);
        const daysSince = (today - startTime) / (1000 * 60 * 60 * 24);
        return daysSince < 30;
    });
    return filteredActivities;
};
