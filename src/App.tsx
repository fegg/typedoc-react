/**
 * App Props
 */
interface AppProps {
    /**
     * App 名字
     */
    name: string;
    // App 版本号
    version: string;
    // App 描述
    desc?: string;
}

/**
 * App 启动类
 */
class App extends React.Component<AppProps, any> {
    render(): JSX.Element {
        const { name, version } = this.props;

        return (
            <div>
                <h1>name: {name}</h1>
                <h2>version: {version}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <App name="App" version="0.0.1" />,
    document.getElementById('app-root')
);