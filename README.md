# demo
![mail_app_アドレス削除追加_メッセージ受信送信](https://github.com/user-attachments/assets/09067c64-96e0-4a7f-a56f-5546d18b1a5a)


# setup


##### vite
###### npm create vite@latest
###### npm install -D vite-tsconfig-paths
###### npx vercel login
###### npx vercel link
###### npx vercel env pull

##### vitest
###### npm install -D vitest happy-dom @vitest/coverage-v8 @testing-library/react @testing-library/user-event @testing-library/jest-dom msw

##### eslint prettier
###### npm install -D eslint-plugin-react eslint-plugin-vitest eslint-plugin-import prettier eslint-config-prettier npm-run-all
###### npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin

##### MUI
###### npm install -D @mui/material @emotion/react @emotion/styled @mui/icons-material

##### storybook
##### https://qiita.com/rikuto125/items/e596cdb53f2ead0eea18
##### https://storybook.js.org/recipes/@mui/material
##### https://qiita.com/aoyagi9936/items/b1f4bd090ba8c30a67ec
###### npx storybook@latest init
###### npm i -D @storybook/addon-themes @emotion/server @fontsource/roboto @fontsource/material-icons style-loader css-loader
###### https://storybook.js.org/addons/storybook-msw-addon
###### npm install msw@latest -D
###### npm i msw storybook-msw-addon -D
###### npx msw init ./api --save

##### supabase
###### npm install @supabase/supabase-js @supabase/auth-ui-react @supabase/auth-ui-shared
###### anon_key,urlをvercelに登録
###### https://vercel.com/templates/next.js/subscription-starter
###### 認証を使用している場合、認証の構成を行う(site_url,redirect_url)

##### react-router
###### npm install react-router-dom@latest

##### zustand
###### npm install zustand
