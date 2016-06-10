<div class="hbox hbox-auto-xs hbox-auto-sm" ng-controller="FileUploadCtrl"  nv-file-drop="" uploader="uploader" filters="queueLimit, customFilter">
  <div class="col w-lg bg-light b-r bg-auto">
    <div class="wrapper-md dker b-b">
      <h3 class="m-n font-thin">Select files</h3>
    </div>
    <div class="wrapper-md">      
      <div ng-show="uploader.isHTML5" class="m-b-md">
          <!-- 3. nv-file-over uploader="link" over-class="className" -->
          <div class="b-a b-2x b-dashed wrapper-lg bg-white text-center m-b" nv-file-over="" over-class="b-info" uploader="uploader">
              Base drop zone
          </div>

          <!-- Example: nv-file-drop="" uploader="{Object}" options="{Object}" filters="{String}" -->
          <div nv-file-drop="" uploader="uploader" options="{ url: '/foo' }">
              <div nv-file-over="" uploader="uploader" over-class="b-danger" class="b-a b-2x b-dashed wrapper-lg lter text-center">
                  Another drop zone with its own settings
              </div>
          </div>
      </div>

      <!-- Example: nv-file-select="" uploader="{Object}" options="{Object}" filters="{String}" -->
      <p>Multiple</p>
      <input type="file" nv-file-select="" uploader="uploader" multiple  />

      <p class="m-t-md">Single</p>
      <input type="file" nv-file-select="" uploader="uploader" />
    </div>
  </div>
  <div class="col">
    <div class="wrapper-md bg-light dk b-b">
      <span class="pull-right m-t-xs">Queue length: <b class="badge bg-info">{{ uploader.queue.length }}</b></span>
      <h3 class="m-n font-thin">Upload queue</h3>      
    </div>
    <div class="wrapper-md">
      <table class="table bg-white-only b-a">
          <thead>
              <tr>
                  <th width="50%">Name</th>
                  <th ng-show="uploader.isHTML5">Size</th>
                  <th ng-show="uploader.isHTML5">Progress</th>
                  <th>Status</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr ng-repeat="item in uploader.queue">
                  <td><strong>{{ item.file.name }}</strong></td>
                  <td ng-show="uploader.isHTML5" nowrap>{{ item.file.size/1024/1024|number:2 }} MB</td>
                  <td ng-show="uploader.isHTML5">
                      <div class="progress progress-sm m-b-none m-t-xs">
                          <div class="progress-bar bg-info" role="progressbar" ng-style="{ 'width': item.progress + '%' }"></div>
                      </div>
                  </td>
                  <td class="text-center">
                      <span ng-show="item.isSuccess" class="text-success"><i class="glyphicon glyphicon-ok"></i></span>
                      <span ng-show="item.isCancel" class="text-warning"><i class="glyphicon glyphicon-ban-circle"></i></span>
                      <span ng-show="item.isError" class="text-danger"><i class="glyphicon glyphicon-remove"></i></span>
                  </td>
                  <td nowrap>
                      <button type="button" class="btn btn-default btn-xs" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess">
                          Upload
                      </button>
                      <button type="button" class="btn btn-default btn-xs" ng-click="item.cancel()" ng-disabled="!item.isUploading">
                          Cancel
                      </button>
                      <button type="button" class="btn btn-default btn-xs" ng-click="item.remove()">
                          Remove
                      </button>
                  </td>
              </tr>
          </tbody>
      </table>
      <div>
        <div>
          <p>Queue progress:</p>
          <div class="progress bg-light dker" style="">
              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" ng-style="{ 'width': uploader.progress + '%' }"></div>
          </div>
        </div>
        <button type="button" class="btn btn-addon btn-success" ng-click="uploader.uploadAll()" ng-disabled="!uploader.getNotUploadedItems().length">
          <i class="fa fa-arrow-circle-o-up"></i> Upload all
        </button>
        <button type="button" class="btn btn-addon btn-warning" ng-click="uploader.cancelAll()" ng-disabled="!uploader.isUploading">
          <i class="fa fa-ban"></i> Cancel all
        </button>
        <button type="button" class="btn btn-addon btn-danger" ng-click="uploader.clearQueue()" ng-disabled="!uploader.queue.length">
            <i class="fa fa-trash-o"></i> Remove all
        </button>
        <p class="text-muted m-t-xl">Note: upload.php file included, files will be uploaded to "src/js/controllers/uploads".</p>
      </div>
    </div>
  </div>
</div>