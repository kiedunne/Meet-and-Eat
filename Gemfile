source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.3'

gem 'rails', '~> 5.2.2'
# Use postgress as the database for Active Record
gem 'pg'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
gem 'react-rails'
gem 'acts_as_follower', github: 'tcocca/acts_as_follower'
gem 'aws-sdk-s3', require: false
gem 'bootstrap-datepicker-rails'
gem 'cancan'
gem 'coveralls', require: false
gem 'devise'
gem 'figaro'
gem 'geocoder'
gem 'gmaps4rails'
gem 'gravatar_image_tag', github: 'mdeering/gravatar_image_tag'
gem 'jquery-rails'
gem 'jquery-ui-rails', '5.0.5'
gem 'mini_magick', '~> 4.9', '>= 4.9.2'
gem 'pry'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false
gem 'factory_bot_rails'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'codecov', require: false
  gem 'factory_bot'
  gem 'rails-controller-testing'
  gem 'rspec-rails', '~> 3.5'
  gem 'rubocop', '~> 0.61.1'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers', '4.0.0.rc1'
  gem 'simplecov', require: false
  gem 'simplecov-console', require: false
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
