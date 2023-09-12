import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { type ArticlesPageSchema } from '../types/articlesPageSchema';
import {
  getArticlesPageError,
  getArticlesPageIsLoading
} from './articlesPageSelectors';

describe('articlesPageSelectors.test', () => {
  it('getArticlesPageIsLoading', () => {
    const articlesPageState: DeepPartial<ArticlesPageSchema> = {
      isLoading: false
    };

    const state: DeepPartial<StateSchema> = {
      articlesPage: articlesPageState as ArticlesPageSchema
    };

    const result = getArticlesPageIsLoading(state as StateSchema);

    expect(result).toBe(false);
  });

  it('getArticlesPageError', () => {
    const articlesPageState: DeepPartial<ArticlesPageSchema> = {
      error: 'some error'
    };

    const state: DeepPartial<StateSchema> = {
      articlesPage: articlesPageState as ArticlesPageSchema
    };

    const result = getArticlesPageError(state as StateSchema);

    expect(result).toBe('some error');
  });
});
