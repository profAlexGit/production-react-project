import { LoginForm } from './LoginForm';
import { StoreDecorator } from '@shared/config/storybookDecorators/StoreDecorator';
const initialState = {
    loginForm: {
        username: '',
        password: ''
    }
};
const loadingState = {
    loginForm: {
        username: 'name',
        password: 'password',
        isLoading: true
    }
};
const errorState = {
    loginForm: {
        username: 'name',
        password: 'password',
        error: 'Какая-то ошибка'
    }
};
const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [StoreDecorator(initialState)]
};
export default meta;
export const Primary = {};
export const PendingForm = {
    name: 'Форма во время отправки данных',
    decorators: [StoreDecorator(loadingState)]
};
export const ErrorForm = {
    name: 'Форма с сообщением об ошибке',
    decorators: [StoreDecorator(errorState)]
};
