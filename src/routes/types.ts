export enum Screens {
    Home = 'Home',
    Welcome = 'Welcome',
    Login = 'Login',
    Register = 'Register',
    ForgetPassword = 'ForgetPassword',
    Onboarding = 'Onboarding',
    Search = 'Search',
    Favorites = 'Favorites',
    Profile = 'Profile',
}


export type PublicStackParamList = {
    [Screens.Welcome]: undefined;
    [Screens.Login]: undefined;
    [Screens.Register]: undefined;
    [Screens.ForgetPassword]: undefined;
    [Screens.Onboarding]: undefined;
}

export type PrivateStackParamList = {
    [Screens.Home]: undefined;
}

export type TabParamList = {
    [Screens.Home]: undefined;
    [Screens.Search]: undefined;
    [Screens.Favorites]: undefined;
    [Screens.Profile]: undefined;
}