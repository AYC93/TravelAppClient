import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'work.shiok.planners',
  appName: 'shiokplanners',
  webDir: 'dist/project',
  server: {
    androidScheme: 'https'
  }
};

export default config;
