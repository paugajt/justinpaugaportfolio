import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import IgTiles from './Components/IgTiles';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Home />
        <NavBar />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus sapien, rutrum a magna ut, aliquam porta nisi. Integer eget nulla volutpat, aliquam lacus in, congue risus. Suspendisse est nunc, rutrum non quam et, maximus pharetra odio. Curabitur volutpat augue id posuere auctor. Vestibulum bibendum diam non tincidunt pellentesque. Cras nisl justo, dignissim sed enim id, lacinia rutrum sapien. Quisque finibus tortor massa, dapibus vestibulum risus iaculis vitae. Vestibulum tincidunt posuere nisl ac molestie. Maecenas interdum imperdiet mauris. Etiam suscipit purus risus. Sed sodales lacus purus, et blandit lectus euismod quis. Aenean sodales dolor et quam maximus, placerat commodo erat finibus. Morbi tempus felis sem, ac lobortis eros commodo mollis. Nulla sit amet mauris ultricies, tincidunt est a, ultrices lorem. Aenean sit amet lacus massa. Phasellus semper mauris id lorem euismod, eu rutrum mauris hendrerit.

Donec ultricies tempor nibh in rutrum. Cras ex libero, porta a gravida quis, aliquam vitae metus. Pellentesque vitae diam id magna luctus lacinia vel a mi. Duis a tortor vitae velit suscipit luctus. Duis porta commodo felis, eu pulvinar justo. Curabitur non urna id urna feugiat eleifend. Etiam eget enim leo. Fusce quis est sed quam faucibus convallis. Nunc pellentesque, orci posuere fringilla elementum, erat diam tristique lacus, non porttitor nisi mauris non purus. Pellentesque odio est, consequat et ultrices vitae, blandit eget nisi. Aenean vitae posuere nisi. Nam a tellus a quam convallis pretium. In hac habitasse platea dictumst.

Cras sed ornare turpis, vel eleifend nulla. Curabitur sit amet leo finibus, semper lorem in, suscipit dui. Nullam feugiat eros posuere, fermentum odio vitae, dapibus tortor. Cras eu interdum sapien. Aliquam varius commodo pretium. Vestibulum malesuada condimentum ex, eget fermentum erat dignissim et. Integer tincidunt, urna eu vestibulum suscipit, odio eros ultrices augue, at facilisis dolor felis sed nisl. Cras id faucibus turpis, in rutrum elit. Donec iaculis commodo nisl, eget gravida arcu fermentum vel. Morbi auctor felis vel posuere feugiat.

Cras in molestie ex, eget tincidunt magna. Aliquam condimentum rhoncus dui sed bibendum. Pellentesque accumsan fermentum interdum. Sed quis sollicitudin leo. Quisque dignissim felis vitae tortor efficitur, quis mattis mauris sagittis. Suspendisse ut libero libero. Duis tempor arcu id nisl maximus posuere. Cras vulputate in est id suscipit. Cras maximus porttitor ipsum vel faucibus. Nulla in lectus arcu.

Nullam ut pellentesque justo. Vestibulum ac nulla varius, ultricies erat et, gravida lacus. Curabitur nec massa dui. Fusce non porttitor arcu. Nullam rutrum ut tortor et vulputate. Maecenas nec pharetra justo, sit amet feugiat diam. Praesent pulvinar neque eu aliquet eleifend. Aliquam efficitur facilisis ex, sit amet varius nulla tincidunt ut.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus sapien, rutrum a magna ut, aliquam porta nisi. Integer eget nulla volutpat, aliquam lacus in, congue risus. Suspendisse est nunc, rutrum non quam et, maximus pharetra odio. Curabitur volutpat augue id posuere auctor. Vestibulum bibendum diam non tincidunt pellentesque. Cras nisl justo, dignissim sed enim id, lacinia rutrum sapien. Quisque finibus tortor massa, dapibus vestibulum risus iaculis vitae. Vestibulum tincidunt posuere nisl ac molestie. Maecenas interdum imperdiet mauris. Etiam suscipit purus risus. Sed sodales lacus purus, et blandit lectus euismod quis. Aenean sodales dolor et quam maximus, placerat commodo erat finibus. Morbi tempus felis sem, ac lobortis eros commodo mollis. Nulla sit amet mauris ultricies, tincidunt est a, ultrices lorem. Aenean sit amet lacus massa. Phasellus semper mauris id lorem euismod, eu rutrum mauris hendrerit.

Donec ultricies tempor nibh in rutrum. Cras ex libero, porta a gravida quis, aliquam vitae metus. Pellentesque vitae diam id magna luctus lacinia vel a mi. Duis a tortor vitae velit suscipit luctus. Duis porta commodo felis, eu pulvinar justo. Curabitur non urna id urna feugiat eleifend. Etiam eget enim leo. Fusce quis est sed quam faucibus convallis. Nunc pellentesque, orci posuere fringilla elementum, erat diam tristique lacus, non porttitor nisi mauris non purus. Pellentesque odio est, consequat et ultrices vitae, blandit eget nisi. Aenean vitae posuere nisi. Nam a tellus a quam convallis pretium. In hac habitasse platea dictumst.

Cras sed ornare turpis, vel eleifend nulla. Curabitur sit amet leo finibus, semper lorem in, suscipit dui. Nullam feugiat eros posuere, fermentum odio vitae, dapibus tortor. Cras eu interdum sapien. Aliquam varius commodo pretium. Vestibulum malesuada condimentum ex, eget fermentum erat dignissim et. Integer tincidunt, urna eu vestibulum suscipit, odio eros ultrices augue, at facilisis dolor felis sed nisl. Cras id faucibus turpis, in rutrum elit. Donec iaculis commodo nisl, eget gravida arcu fermentum vel. Morbi auctor felis vel posuere feugiat.

Cras in molestie ex, eget tincidunt magna. Aliquam condimentum rhoncus dui sed bibendum. Pellentesque accumsan fermentum interdum. Sed quis sollicitudin leo. Quisque dignissim felis vitae tortor efficitur, quis mattis mauris sagittis. Suspendisse ut libero libero. Duis tempor arcu id nisl maximus posuere. Cras vulputate in est id suscipit. Cras maximus porttitor ipsum vel faucibus. Nulla in lectus arcu.

Nullam ut pellentesque justo. Vestibulum ac nulla varius, ultricies erat et, gravida lacus. Curabitur nec massa dui. Fusce non porttitor arcu. Nullam rutrum ut tortor et vulputate. Maecenas nec pharetra justo, sit amet feugiat diam. Praesent pulvinar neque eu aliquet eleifend. Aliquam efficitur facilisis ex, sit amet varius nulla tincidunt ut.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus sapien, rutrum a magna ut, aliquam porta nisi. Integer eget nulla volutpat, aliquam lacus in, congue risus. Suspendisse est nunc, rutrum non quam et, maximus pharetra odio. Curabitur volutpat augue id posuere auctor. Vestibulum bibendum diam non tincidunt pellentesque. Cras nisl justo, dignissim sed enim id, lacinia rutrum sapien. Quisque finibus tortor massa, dapibus vestibulum risus iaculis vitae. Vestibulum tincidunt posuere nisl ac molestie. Maecenas interdum imperdiet mauris. Etiam suscipit purus risus. Sed sodales lacus purus, et blandit lectus euismod quis. Aenean sodales dolor et quam maximus, placerat commodo erat finibus. Morbi tempus felis sem, ac lobortis eros commodo mollis. Nulla sit amet mauris ultricies, tincidunt est a, ultrices lorem. Aenean sit amet lacus massa. Phasellus semper mauris id lorem euismod, eu rutrum mauris hendrerit.

Donec ultricies tempor nibh in rutrum. Cras ex libero, porta a gravida quis, aliquam vitae metus. Pellentesque vitae diam id magna luctus lacinia vel a mi. Duis a tortor vitae velit suscipit luctus. Duis porta commodo felis, eu pulvinar justo. Curabitur non urna id urna feugiat eleifend. Etiam eget enim leo. Fusce quis est sed quam faucibus convallis. Nunc pellentesque, orci posuere fringilla elementum, erat diam tristique lacus, non porttitor nisi mauris non purus. Pellentesque odio est, consequat et ultrices vitae, blandit eget nisi. Aenean vitae posuere nisi. Nam a tellus a quam convallis pretium. In hac habitasse platea dictumst.

Cras sed ornare turpis, vel eleifend nulla. Curabitur sit amet leo finibus, semper lorem in, suscipit dui. Nullam feugiat eros posuere, fermentum odio vitae, dapibus tortor. Cras eu interdum sapien. Aliquam varius commodo pretium. Vestibulum malesuada condimentum ex, eget fermentum erat dignissim et. Integer tincidunt, urna eu vestibulum suscipit, odio eros ultrices augue, at facilisis dolor felis sed nisl. Cras id faucibus turpis, in rutrum elit. Donec iaculis commodo nisl, eget gravida arcu fermentum vel. Morbi auctor felis vel posuere feugiat.

Cras in molestie ex, eget tincidunt magna. Aliquam condimentum rhoncus dui sed bibendum. Pellentesque accumsan fermentum interdum. Sed quis sollicitudin leo. Quisque dignissim felis vitae tortor efficitur, quis mattis mauris sagittis. Suspendisse ut libero libero. Duis tempor arcu id nisl maximus posuere. Cras vulputate in est id suscipit. Cras maximus porttitor ipsum vel faucibus. Nulla in lectus arcu.

Nullam ut pellentesque justo. Vestibulum ac nulla varius, ultricies erat et, gravida lacus. Curabitur nec massa dui. Fusce non porttitor arcu. Nullam rutrum ut tortor et vulputate. Maecenas nec pharetra justo, sit amet feugiat diam. Praesent pulvinar neque eu aliquet eleifend. Aliquam efficitur facilisis ex, sit amet varius nulla tincidunt ut.
      </p>
        <Footer />
      </div>
    );
  }
}

export default App;
