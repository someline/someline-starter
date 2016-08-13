<!-- footer -->
<footer id="footer" class="app-footer" role="footer">
    <div class="wrapper b-t bg-light">
        <span class="pull-right"> <a href ui-scroll="app" class="m-l-sm text-muted"><i class="fa fa-long-arrow-up"></i></a></span>
        <span class="pull-right">
            @foreach(\LaravelLocalization::getSupportedLocales() as $locale => $supportedLocale)
                <a href="{{ url('locales/switch/'.$locale.'?redirect_to='.current_full_url()) }}">{{ $supportedLocale['native'] }}</a> &nbsp;
            @endforeach
        </span>
        @include('angulr.layout.parts.footer.copyright')
    </div>
</footer>
<!-- / footer -->