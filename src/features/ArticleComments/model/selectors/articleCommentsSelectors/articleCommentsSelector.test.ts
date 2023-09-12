import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { type ArticleCommentsSchema } from '../../types/ArticleCommentsSchema';
import {
  getArticleCommentIsLoading,
  getArticleCommentsError
} from './articleCommentsSelectors';

describe('articleCommentsSelector.test', () => {
  describe('getArticleCommentIsLoading', () => {
    it('return correct value', () => {
      const articleCommentsState: DeepPartial<ArticleCommentsSchema> = {
        isLoading: false
      };

      const state: DeepPartial<StateSchema> = {
        articleComments: articleCommentsState as ArticleCommentsSchema
      };

      const result = getArticleCommentIsLoading(state as StateSchema);

      expect(result).toBe(false);
    });

    it('return false when no state', () => {
      const state: DeepPartial<StateSchema> = {};

      const result = getArticleCommentIsLoading(state as StateSchema);

      expect(result).toBe(false);
    });
  });

  describe('getArticleCommentsError', () => {
    it('return correct value', () => {
      const articleCommentsState: DeepPartial<ArticleCommentsSchema> = {
        error: 'error'
      };

      const state: DeepPartial<StateSchema> = {
        articleComments: articleCommentsState as ArticleCommentsSchema
      };

      const result = getArticleCommentsError(state as StateSchema);

      expect(result).toBe(articleCommentsState.error);
    });

    it('return null when no state', () => {
      const state: DeepPartial<StateSchema> = {};

      const result = getArticleCommentsError(state as StateSchema);

      expect(result).toBeNull();
    });
  });
});
