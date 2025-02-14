export enum Screens {
    Home = 'Home',
    Welcome = 'Welcome',
    Login = 'Login',
    Register = 'Register',
    ForgetPassword = 'ForgetPassword',
    Onboarding = 'Onboarding',
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