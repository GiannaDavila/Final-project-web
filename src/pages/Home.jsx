import { Card } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';



export default function HomePage() {
    return (
        <div style={{backgroundColor:"royalblue"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="site-card-border-less-wrapper" style={{paddingRight: "60px"}}>
                <Card
                    title="Breakfast"
                    bordered={false}
                    style={{
                        width: 650,
                        height: 250,
                    }}
                    actions={[
                        <PlusOutlined key="add"/>,
                       <EditOutlined key="edit" />,
                       <DeleteOutlined key="delete"/>
                    ]}
                >
                    <p>Card content</p>
                </Card>
            </div>
            <div className="site-card-border-less-wrapper">
                <Card
                    title="Lunch"
                    bordered={false}
                    hoverable={true}
                    style={{
                        width: 650,
                        height: 250,
                    }}
                    actions={[
                        <PlusOutlined key="add"/>,
                       <EditOutlined key="edit" />,
                       <DeleteOutlined key="delete"/>
                    ]}
                >
                    <p>Card content</p>
                </Card>
            </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop:"40px"}}>
            <div className="site-card-border-less-wrapper" style={{paddingRight: "60px"}}>
                <Card
                    title="Dinner"
                    bordered={false}
                    style={{
                        width: 650,
                        height: 250,
                    }}
                    actions={[
                        <PlusOutlined key="add"/>,
                       <EditOutlined key="edit" />,
                       <DeleteOutlined key="delete"/>
                    ]}
                >
                    <p>Card content</p>
                </Card>
            </div>
            <div className="site-card-border-less-wrapper">
                <Card
                    title="Snack"
                    bordered={false}
                    style={{
                        width: 650,
                        height: 250,
                    }}
                    actions={[
                        <PlusOutlined key="add"/>,
                       <EditOutlined key="edit" />,
                       <DeleteOutlined key="delete"/>
                    ]}
                >
                    <p>Card content</p>
                </Card>
            </div>
        </div>
        </div>
    )
}