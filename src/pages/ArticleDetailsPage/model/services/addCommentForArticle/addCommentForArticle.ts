import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDeatils/addCommentForArticle', async (text, thunkApi) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkApi;
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
        rejectWithValue('error');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article?.id,
            text,
            userId: userData?.id,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article?.id));

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
