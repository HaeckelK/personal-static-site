const PageBanner = {
    template: `<section class="hero is-info">
    <div class="hero-body">
      <p class="title">
        {{ pagename }}
      </p>
    </div>
  </section>`,
    props: ['pagename']
  };
  
  const PageFooter = {
    template: `<footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>East Paraday </strong> by <a href="https://github.com/HaeckelK/personal-static-site">HaeckelK</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>
    </div>
  </footer>`
  };
