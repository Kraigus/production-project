import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsisLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.comments?.isLoading || false;
};

export const getArticleCommentsError = (state: StateSchema) => {
    return state.articleDetailsPage?.comments?.error;
};
