import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en';
import 'element-ui/packages/theme-chalk/lib/index.css';
import locale from 'element-ui/lib/locale';

import {
  Button,
  Card,
  Form,
  FormItem,
  Select,
  Option,
  Alert,
  Input,
  Dialog,
  Icon,
  Collapse,
  CollapseItem,
} from 'element-ui';

const elements = [Button,
  Card,
  Form,
  FormItem,
  Select,
  Option,
  Alert,
  Input,
  Dialog,
  Icon,
  Collapse,
  CollapseItem,

];

// configure language
locale.use(lang);

elements.forEach((El) => Vue.use(El, { locale }));
