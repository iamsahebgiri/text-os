export const timeAgo = (date: string) => {
	const now = new Date();
	const createdAt = new Date(date);
	const diff = now.getTime() - createdAt.getTime();
	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) {
		return `${years}y`;
	}

	if (months > 0) {
		return `${months}mo`;
	}

	if (days > 0) {
		return `${days}d`;
	}

	if (hours > 0) {
		return `${hours}h`;
	}

	if (minutes > 0) {
		return `${minutes}m`;
	}

	if (seconds > 0) {
		return `${seconds}s`;
	}

	return "now";
};
