Accounts.onCreateUser(function (options, user) {
	//user.isAdmin = true;
    if (options.profile)
        user.profile = options.profile;

    return user;
});