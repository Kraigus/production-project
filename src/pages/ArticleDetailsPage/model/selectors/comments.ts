import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsisLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
