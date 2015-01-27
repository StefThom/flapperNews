/**
 * Created by in134bel on 27-1-2015.
 */
angular.module('flapperNews', ['ui.router'])
    .factory('posts',[function(){
       var o = {
           posts: [
               {title: 'DUO', link: 'http://duo.nl', upvotes: 5},
               {title: 'Algemeen Dagblad', link: 'http://ad.nl', upvotes: 2},
               {title: 'Google', link: 'http://google.nl', upvotes: 15},
               {title: 'Markplaats', link: 'http://marktplaats.nl', upvotes: 9},
               {title: 'KNSA', link: 'http://www.knsa.nl', upvotes: 4}
           ]
       };
       return o;
    }])
    .controller('MainCtrl', [
        '$scope', 'posts', function ($scope, posts) {
            $scope.test = 'Hello World!';
            $scope.posts = posts.posts;

            // Toevoegen van een post
            $scope.addPost = function(){
                if(!$scope.title || $scope.title === '') {
                    return;
                }

                $scope.posts.push({
                    title: $scope.title,
                    link: $scope.link,
                    upvotes: 0});
                $scope.title = '';
                $scope.link = '';
            };
            // Liken van een een post
            $scope.incrementUpvotes = function(post) {
                post.upvotes += 1;
            };
        }]);