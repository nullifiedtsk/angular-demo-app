import { Routes } from '@angular/router';
import { NavItemData } from '../../../../core/menu.service';
import { BreakpointObserverExample } from './components/breakpoint-observer/breakpoint-observer.example';
import { NativeMediaMatcherExample } from './components/native-media-matcher/native-media-matcher.example';
import { CdkMediaMatcherExample } from './components/cdk-media-matcher/cdk-media-matcher.example';

export const TRAINING_EXAMPLES_LISTENING_MEDIA_QUERIES_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'cdk-service',
  },
  {
    path: 'breakpoint-observer',
    data: {
      navItem: {
        name: 'CDK Breakpoint Observer',
        documentationUrl: 'https://material.angular.io/cdk/layout/overview',
      } as NavItemData,
    },
    component: BreakpointObserverExample,
  },
  {
    path: 'cdk-media-matcher',
    data: {
      navItem: {
        name: 'CDK Media Matcher',
        documentationUrl: 'https://material.angular.io/cdk/layout/overview#mediamatcher',
      } as NavItemData,
    },
    component: CdkMediaMatcherExample,
  },
  {
    path: 'native-media-matcher',
    data: {
      navItem: {
        name: 'Native Window Media Matcher',
        documentationUrl: 'https://developer.mozilla.org/ru/docs/Web/API/Window/matchMedia',
      } as NavItemData,
    },
    component: NativeMediaMatcherExample,
  },
];
