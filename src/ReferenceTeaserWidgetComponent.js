import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('ReferenceTeaserWidget', ({ widget }) => {
  const teaser = widget.get('page');

  if (!teaser && Scrivito.isInPlaceEditingActive()) {
    return (

        <h4 className="text-center">
          Provide a reference to a page in the widget properties.
        </h4>

    );
  }

  return (
    <div className="text-center">
    <Scrivito.LinkTag to={ teaser } >
    <Scrivito.ImageTag content={ teaser } attribute="titleImage"  className="img-fluid"/>
        <div>
        <Scrivito.ContentTag tag="h3" className="h4 m-0 p-0" content={ teaser } attribute="title" />
          <Scrivito.ContentTag tag="h4" className="h5 m-0 p-0" content={ teaser } attribute="subtitle" />
    </div>
    </Scrivito.LinkTag>
    </div>
  );
});


