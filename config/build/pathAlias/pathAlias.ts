import path from 'path';

export const pathAlias = (pathToRoot: string): Record<string, string> => {
  return {
    '@app': path.resolve(pathToRoot, 'app/'),
    '@pages': path.resolve(pathToRoot, 'pages/'),
    '@widgets': path.resolve(pathToRoot, 'widgets/'),
    '@features': path.resolve(pathToRoot, 'features/'),
    '@entities': path.resolve(pathToRoot, 'entities/'),
    '@shared': path.resolve(pathToRoot, 'shared/')
  };
};
