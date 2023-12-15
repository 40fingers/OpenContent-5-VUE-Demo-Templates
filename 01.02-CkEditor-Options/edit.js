const smallConfig = {
    toolbar: [
        {
            name: "basicstyles",
            groups: ["basicstyles", "cleanup"],
            items: [
                "Bold",
                "Italic",
                "Underline",
                "Strike",
                "Subscript",
                "Superscript",
                "-",
                "RemoveFormat",
            ],
        },
        { name: "styles", items: ["Styles", "Format"] },
        {
            name: "paragraph",
            groups: ["list", "indent", "blocks", "align"],
            items: [
                "NumberedList",
                "BulletedList",
                "-",
                "Outdent",
                "Indent",
                "-",
                "JustifyLeft",
                "JustifyCenter",
                "JustifyRight",
                "JustifyBlock",
            ],
        },
        { name: "links", items: ["Link", "Unlink"] },

        {
            name: "document",
            groups: ["mode", "document", "doctools"],
            items: ["Maximize", "Source"],
        },
    ],
    // Set the most common block elements.
    format_tags: "p;h1;h2;h3;pre",
    // Simplify the dialog windows.
    removeDialogTabs: "image:advanced;link:advanced",
    // Remove one plugin.
    removePlugins: "elementspath",
    //extraPlugins: "dnnpages",
    //autoGrow_onStartup : true,
    //autoGrow_minHeight : 100,
    //autoGrow_maxHeight : 300,
    height: 150,
    //skin : 'flat',
    customConfig: "",
    stylesSet: [],
};

const mediumConfig = {
    toolbar: [
        {
            name: "basicstyles",
            groups: ["basicstyles", "cleanup"],
            items: [
                "Bold",
                "Italic",
                "Underline",
                "Strike",
                "Subscript",
                "Superscript",
                "-",
                "RemoveFormat",
            ],
        },
        { name: "styles", items: ["Styles", "Format"] },
        {
            name: "paragraph",
            groups: ["list", "indent", "blocks", "align"],
            items: [
                "NumberedList",
                "BulletedList",
                "-",
                "Outdent",
                "Indent",
                "-",
                "JustifyLeft",
                "JustifyCenter",
                "JustifyRight",
                "JustifyBlock",
            ],
        },
        { name: "links", items: ["Link", "Unlink", "Anchor"] },
        { name: "insert", items: ["Table", "Smiley", "SpecialChar", "Iframe"] },
        {
            name: "document",
            groups: ["mode", "document", "doctools"],
            items: ["Maximize", "ShowBlocks", "Source"],
        },
    ],
    // Set the most common block elements.
    format_tags: "p;h1;h2;h3;pre;div",

    //http://docs.ckeditor.com/#!/guide/dev_allowed_content_rules
    extraAllowedContent: "table tr th td caption[*](*);" + "div span(*);",
    //'a[!href](*);'
    //'img[!src,alt,width,height](*);' +
    //'h1 h2 h3 p blockquote strong em(*);' +
    // Simplify the dialog windows.
    removeDialogTabs: "image:advanced;link:advanced",
    // Remove one plugin.
    removePlugins: "elementspath",
    //extraPlugins: "dnnpages",
    //autoGrow_onStartup : true,
    //autoGrow_minHeight : 100,
    //autoGrow_maxHeight : 300,
    height: 150,
    //skin : 'flat',
    customConfig: "",
    stylesSet: [],
};

const largeConfig = {
    toolbar: [
        {
            name: "clipboard",
            items: [
                "Cut",
                "Copy",
                "Paste",
                "PasteText",
                "PasteFromWord",
                "-",
                "Undo",
                "Redo",
            ],
        },
        {
            name: "editing",
            items: [
                "Find",
                "Replace",
                "-",
                "SelectAll",
                "-",
                "SpellChecker",
                "Scayt",
            ],
        },
        {
            name: "insert",
            items: [
                "EasyImageUpload",
                "Table",
                "HorizontalRule",
                "Smiley",
                "SpecialChar",
                "PageBreak",
                "Iframe",
            ],
        },
        "/",
        {
            name: "basicstyles",
            items: [
                "Bold",
                "Italic",
                "Underline",
                "Strike",
                "Subscript",
                "Superscript",
                "-",
                "RemoveFormat",
            ],
        },
        {
            name: "paragraph",
            items: [
                "NumberedList",
                "BulletedList",
                "-",
                "Outdent",
                "Indent",
                "-",
                "Blockquote",
                "CreateDiv",
                "-",
                "JustifyLeft",
                "JustifyCenter",
                "JustifyRight",
                "JustifyBlock",
                "-",
                "BidiLtr",
                "BidiRtl",
            ],
        },
        { name: "links", items: ["Link", "Unlink", "Anchor"] },

        "/",
        { name: "styles", items: ["Styles", "Format", "Font", "FontSize"] },
        { name: "colors", items: ["TextColor", "BGColor"] },
        {
            name: "tools",
            items: ["Maximize", "ShowBlocks", "-", "About", "-", "Source"],
        },
    ],
    // Set the most common block elements.
    format_tags: "p;h1;h2;h3;pre;div",
    //http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-allowedContent
    allowedContentRules: true,
    // Simplify the dialog windows.
    removeDialogTabs: "image:advanced;link:advanced",
    // Remove one plugin.
    removePlugins: "elementspath,image",
    //extraPlugins: "dnnpages",
    //autoGrow_onStartup : true,
    //autoGrow_minHeight : 100,
    //autoGrow_maxHeight : 300,
    height: 150,
    //skin : 'flat',
    customConfig: "",
    stylesSet: [],
    //easyimage_toolbar :['EasyImageAlignLeft', 'EasyImageAlignCenter', 'EasyImageAlignRight']
};

const configCustom = { small: smallConfig, medium: mediumConfig, full: largeConfig };

var CkEditorField = window.Lama.getFieldComponent('CkEditorField');

window.Lama.registerFieldComponent("ckeditor1", {

    name: "ckeditor1",
    extends: CkEditorField,

    computed: {
        editorConfig() {
            if (this.options.configset) {
                return configCustom[this.options.configset];
            } else {
                return basicConfig;
            }
        },

        model: {
            get() {
                // return this.value; 
            },
            set(val) {

                // Code to set a value

            }
        },
        rootModel() {

            return this.$parent.$parent.model;

        }
    },

    methods: {

        init() {

            // Code on init
        }

    },

    builder: {
        // schema & options for builder (this merged with schema & options of extends field)
        props() {
            return {
                schema: {
                    type: "object",
                    properties: {

                    }
                },
                options: {
                    fields: {

                    }
                }
            };
        },
        // transform builder data to schema & options
        fromBuilder(field) {
            return {
                schema: {
                    type: "string",
                    required: field.required,
                },
                options: {
                    type: "ckeditor1",
                    configset: field.configset
                },
            };
        },
        toBuilder(def) {
            return {
                fieldType: "ckeditor1",
                configset: def.options.configset
            };
        }
    }
});



