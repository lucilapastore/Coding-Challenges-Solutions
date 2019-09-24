function hurdleRace(k, height) {
    let tallest = Math.max(...height);
    let doses = tallest - k;
    if (tallest > k) {
        return doses;
    } else if (tallest < k) {
        return 0;
    }
}
